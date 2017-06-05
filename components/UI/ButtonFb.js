export default (props) => (
 <div className='Wrapper'>
  
   <style jsx>{`

    .Wrapper {
      text-align: center;
      margin-top: 10px;
    }

    .Login-F {
      cursor: pointer;
      border-radius: 25px;
      outline: none;
      border: 2px solid #2D6CDF;
      background: #2D6CDF;
      color: #fff;
      width: 200px;
      height: 40px;
      letter-spacing: 1px;
      margin-top: 2em;
      font-weight: bold;
      font-size: 0.9em;
    }

    `}</style>
    <button className="Login-F" onClick={props.funcLogF} >
      Login con Facebook
    </button>
 </div>
)
