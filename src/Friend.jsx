export default function Friend({prors}){
    const {name,email,id} = prors;
    return(
        <div className="box">
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
            <p>Id:{id}</p>
        </div>
    )
}