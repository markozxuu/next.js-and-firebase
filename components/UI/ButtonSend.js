export default (props) => (
  <div>

    <style jsx>{`

     .wrapper {
       cursor: pointer;
       display: inline-block;
       position: relative;
       padding: 10px;
       margin-left: 6.5em;
       border-radius: 25px;
       outline: none;
       border: 2px solid;
       background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);
       color: #fff;
       width: auto;
       height: 30px;

     }


     input {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
     }

     .title {
      margin: 5px;
      margin-left: 10px;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      font-size: 1.2em;
      font-style: normal;
      color: #fff;
     }

     .container {
      margin-top: 45px;
      margin-left: 390px;
     }

    `}</style>

    <div className="container">

       <div className="wrapper">
            <h1 className='title' id='upload'> Upload a picture </h1>
            <input type="file" id='send' onChange={props.funcUpload} />
            <progress value={props.stateValue} max="100" />
       </div>

   </div>

  </div>
)
