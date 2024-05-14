import logo from "./logo.svg";
import "./App.css";

import Class from "./Props/Class";

import RouterConcept from "./ReactRouter/RouterConcept";
import UseParamMain from "./UseParams/UseParamMain";
import NameChangeUseState from './Hooks/UseState/NameChangeUseState'
import Counter from "./Hooks/UseState/Counter";
import ToggleNames from "./Hooks/UseState/ToggleNames";
import UpdateObj from "./Hooks/UseState/UpdateObj";
import ArrayOfObjUpdate from "./Hooks/UseState/ArrayOfObjUpdate";
import UpdatePerticularObjectInArrOfObj from "./Hooks/UseState/UpdatePerticularObjectInArrOfObj";
import Timer from "./Hooks/UseEffect/Timer";
import ApiFetch from "./Hooks/UseEffect/ApiFetch";
import AxiosApiFetch from "./Axios/AxiosGet/AxiosApiFetch"
import SearchProduct from "./Search/SearchProduct";
import LoadingMain from "./Loading/LoadingMain";
import IncrimentDecrement from "./Hooks/UseReducer/IncrimentDecrement";
import PostReq from "./Axios/AxiosPost/PostReq";
import AddUser from "./Axios/AxiosPost/AddUser";
import UseContextMain from "./Hooks/UseContext/UseContextMain";
import ContexRouting from "./Hooks/UseContexHooks/ContexRouting";
import Parent from "./Hooks/UseMemo/Parent";
import ParentCallback from './Hooks/UseCallback/Parent' 
import HookFormValidation from "./ReactHookForm/HookFormValidation";
import HookFormWithPostReq from './ReactHookForm/HookFormWithPostReq'
import QueryRouting from "./ReactQuery/QueryRouting";
function App() {
  return (
    <div className="App">
      {/* <RouterConcept /> */}
      {/* <Class /> */}
      {/* <UseParamMain/> */}
      {/* <NameChangeUseState/>  */}
      {/* <ToggleNames/> */}
      {/* <Counter/> */}
      {/* <UpdateObj/> */}
      {/* <ArrayOfObjUpdate/> */}
      {/* <UpdatePerticularObjectInArrOfObj/> */}
      {/* <Timer/> */}
      {/* <ApiFetch/> */}
      {/* <AxiosApiFetch/> */}
      {/* <PostReq/> */}
      {/* <AddUser/> */}
      {/* <SearchProduct/> */}
      {/* <LoadingMain/> */}
      {/* <IncrimentDecrement/> */}
      {/* <UseContextMain/> */}
      {/* <ContexRouting/> */}
      {/* <Parent/> */}
      {/* <ParentCallback/> */}
      {/* <HookFormValidation/> */}
      {/* <HookFormWithPostReq/> */}
      <QueryRouting/>
    </div>
  );
}

export default App;
