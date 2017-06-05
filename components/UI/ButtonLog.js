export default (props) => (
 <div>
    <style jsx>{`
    .log {
     margin-left: 5px;
     cursor: pointer;
     border-radius: 25px;
     outline: none;
     border: 2px;
     background: linear-gradient(to right, #da22ff, #9733ee);
     color: #fff;
     width: 100px;
     height: 50px;
     letter-spacing: 1px;
     margin-top: 2em;
     font-weight: bold;
     font-size: 0.9em;
    }



    `}</style>

    <button className='log' onClick={props.funcLogout}>Log Out</button>
 </div>
)
