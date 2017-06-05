import ButtonSend from './ButtonSend';
import Header from './Header';
import ButtonLog from './ButtonLog';

export default (props) => (
 <div>
   <Header />
   <ButtonSend
    stateValue={props.stateValue}
    funcUpload={props.funcUpload}
   />
   <ButtonLog funcLogout={props.funcLogout} />
 </div>
)
