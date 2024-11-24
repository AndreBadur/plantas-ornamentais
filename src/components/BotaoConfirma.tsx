interface Props{
  text: string;
  action: any;
}

export default function Button(props: Props) {
  return (
    <div>
      <button onClick={props.action}
        className={`bg-[#00F511] h-[3.1rem] w-[14.8rem] rounded-lg text-[1.5rem] text-[#ffffff] font-bebasNeue`}
      >
        {props.text}
      </button>
    </div>
  );
}
