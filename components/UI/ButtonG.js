export default (props) => (
  <div className='Wrapper'>
   
    <style jsx>{`

     .Wrapper {
       text-align: center;
       margin-top: 10px;
     }

     .Login-G {
       cursor: pointer;
       border-radius: 25px;
       outline: none;
       border: 2px solid #FF5A5A;
       background: #FF5A5A;
       color: #fff;
       width: 200px;
       height: 40px;
       letter-spacing: 1px;
       margin-top: 3em;
       font-weight: bold;
       font-size: 0.9em;
     }

    `}</style>

    <button className="Login-G" onClick={props.funcLogG} >
      Login con Google
    </button>
  </div>
)
