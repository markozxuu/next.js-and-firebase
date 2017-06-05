import React, {Component} from 'react';
import firebase from 'firebase';
import ButtonFb from '../components/UI/ButtonFb';
import ButtonG from '../components/UI/ButtonG';
import Timeline from '../components/UI/Timeline';


export default class Authentication extends Component {
 constructor() {
 super();

  this.state = {
    user: null,
    uploadValue: 0,
    pictures: []
  };

  //Cada metodo que creemos debemos de hacerle el bind()

   this.renderLoginButton = this.renderLoginButton.bind(this);

   this.handleUpload = this.handleUpload.bind(this);
   this.handleAuthGoogle = this.handleAuthGoogle.bind(this);
   this.handleAuthFacebook = this.handleAuthFacebook.bind(this);
   this.handleLogout = this.handleLogout.bind(this);

 }

 componentWillMount() {

  // Esta atento a cambios del Auth
  firebase.auth().onAuthStateChanged(user => {
    this.setState({user});
  });

  firebase.database().ref('fotos').on('child_added',snapshot => {

   this.setState({
     pictures: this.state.pictures.concat(snapshot.val())
   });

  });

 }

 handleAuthFacebook() {
  //provedor Facebook
  const provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithRedirect(provider)

  .then(result => {

   const token = result.credential.accessToken;
   const user = result.user;

   console.log(token)
   console.log(user)

  })

 .catch(error => console.log(`Tu error es ${error.code} :C `));

 }

 handleAuthGoogle() {
  //provedor Google
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithRedirect(provider)
  // Devuelve una promesa

  .then(result => console.log(`${result.user.email} ha iniciado secion`))
  .catch(error => console.log(`Error ${error.code}: ${error.message}`));

 }

 handleLogout() {

  firebase.auth().signOut()

  .then(result => console.log(`Usuario ${result.user.email} a cerrar sesión`))

  .catch(error => console.log(`Error ${error.code}: ${error.message}`));

 }

 handleUpload(e) {

  const file = e.target.files[0]; // Apuntando al fichero numero 1
  const storageRef = firebase.storage().ref(`/photos/${file.name}`);
  // Creacion de una referencia del storage(firebase) donde guardaremos el file
  const task = storageRef.put(file); // Sube el fichero(numero 1) al storage

  task.on('state_changed', snapshot => {

   let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

   // Esto nos va dar el porcentaje de fichero que ha subido

   this.setState({
     uploadValue: percentage
   });


  }, error => {
    console.log(error.message);
  },() => {


    const record = {
     photoURL: this.state.user.photoURL,
     displayName: this.state.user.displayName,
     image: task.snapshot.downloadURL
   };


   let dbRef = firebase.database().ref('fotos');
   let newPicture = dbRef.push();
   newPicture.set(record);

  });

 }

 renderLoginButton() {

  if(this.state.user != null) {
     return(
      <div>
       <Timeline
        stateValue={this.state.uploadValue}
        funcUpload={this.handleUpload}
        funcLogout={this.handleLogout}
       />

       {
          this.state.pictures.map(picture => (
          <div>

           <style jsx>{`

            .card {
                /* Add shadows to create the "card" effect */
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                height: 679px;
                width: 600px;

            }

            /* On mouse-over, add a deeper shadow */
            .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }

            /* Add some padding inside the card container */

            .user {
             height: 600px;
             width: 600px;
            }

            .tes {
             padding-top: 30px;
             padding-left: 300px;
            }

            .titulo {
             text-transform: lowercase;
             display: block;
             margin: -2em;
             margin-left: 60px;
             font-family: 'Roboto', sans-serif;

            }

            .photo {
               height: 40px;
               width: 40px;
               /* los siguientes valores son independientes del tamaño del círculo */
               background-repeat: no-repeat;
               background-position: 50%;
               border-radius: 50%;
               background-size: 100% auto;
               margin-top: 14px;
               margin-left: 10px;
            }

           `}</style>

           <div className="tes">

              <div className="card">
                  <img className="user"
                   src={picture.image} alt={picture.displayName}/>
                  <img className="photo"
                   src={picture.photoURL} alt={picture.displayName}/>
                  <h4 className="titulo">{picture.displayName}</h4>
              </div>

           </div>

          </div>

         )).reverse()
       }
     </div>
     );
  }else{
   return(
    <div>
      <ButtonFb funcLogF={this.handleAuthFacebook}/>
      <ButtonG funcLogG={this.handleAuthGoogle} />
    </div>
   );
  }

 }

 render() {
  return(
   <div>
    { this.renderLoginButton() }
   </div>
  );
 }
}
