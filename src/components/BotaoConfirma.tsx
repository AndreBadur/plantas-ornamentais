interface Props {
  text: string;
}

<<<<<<< HEAD
export default function Button({text}){
    return(
        <div>
            <button className={`bg-[#00F511] h-[3.1rem] w-[14.8rem] rounded-lg text-[1.5rem] text-[#ffffff] font-bebasNeue`} type="submit">{text}</button>
        </div>
    )
}
=======
export default function Button(props: Props) {
  return (
    <div>
      <button
        className={`bg-[#00F511] h-[3.1rem] w-[14.8rem] rounded-lg text-[1.5rem] text-[#ffffff] font-bebasNeue`}
      >
        {props.text}
      </button>
    </div>
  );
}
>>>>>>> 7e46fb6f35d78c1aa47c42fdf391c980ce216b52
