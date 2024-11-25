import { SubTitle } from "./TextoAuth";

interface Props{
    text: string;
}
export default function ProductLabel(props:Props) {
  return (
   
      <SubTitle text={props.text}></SubTitle>

  );
}
