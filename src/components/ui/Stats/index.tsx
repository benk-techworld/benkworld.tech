import CountUp from "react-countup"

type Stat = {
    num: number
    text: string
}

const stats:Stat[] = [
    {
        num:5,
        text: "Projects completed",
    },
    {
        num:10,
        text: "Technologies mastered",
    },
    {
        num:500,
        text: "Code commits",
    }        

]

export default function Stats() {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex justify-between xl:justify-evenly">
                    {stats.map((stat,index)=>{
                        return (
                            <div className="flex-0 flex gap-3 items-center justify-center xl:justify-start" key={index}>
                                <CountUp end={stat.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-bold"/>
                                <p className="text-base xl:text-xl leading-snug text-secondary/80 text-wrap">{stat.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
} 