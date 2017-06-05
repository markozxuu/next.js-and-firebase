export default () => (
 <div>

   <style jsx>{`

    .Title {
      text-align: left;
      color: #fff;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;
      margin-left: 10px;
      font-size: 2.3em;
      margin-top: 15px;
    }

    .Header {
     background: #24C6DC;  /* fallback for old browsers */
     background: -webkit-linear-gradient(to right, #514A9D, #24C6DC);  /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to right, #514A9D, #24C6DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     height: 80px;
     padding: 5px;

    }

   `}</style>

   <header className='Header'>
     <h1 className='Title'>Photgram</h1>
   </header>

 </div>
)
