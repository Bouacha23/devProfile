

function Comtitle( {icon , firstLabel ,SecendLabel }) {
  return (
    <div className="text flex flex-col items-center  ">
    <h3 className=" fl ">
        {icon}
        <p className=" capitalize text-write "> {firstLabel} </p>
    </h3>
    <p className=" capitalize font-bold "> {SecendLabel}   </p>
</div>
  )
}

export default Comtitle
