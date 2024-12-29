import Buttonz from "../../../components/Buttonz";

const DemoButtonz = () => {
    return ( 
        <>
        <Buttonz onClick={()=>alert("sample onclick")}>Sample Button</Buttonz>
        </>
     );
}
 
export default DemoButtonz;