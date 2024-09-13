export default function Porfolio({data}){
    return(
        <>
        <h2>Project:</h2>
        <p>{data.title}</p>
        <h2>Description:</h2>
        <p>{data.desc}</p>
        <a href={data.deployUrl}>
            <img src={data.imgUrl}alt="" />
        </a>

        {/* finish this later */}
        </>
    )
}