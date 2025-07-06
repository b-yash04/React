import Entry from "./Entry.jsx"
import data from "./data.js"
export default function Main(){
    const dataArr = data.map((d)=>{
        return <Entry img = {d.img}
           country ={d.country} title = {d.title}
            googleMapsLink = {d.googleMapsLink} dates = {d.dates}
            text = {d.text}
        />
    })
    return (
        <main className="content">
            <div className="places">
            {dataArr}
            </div>

        </main>
    )
}