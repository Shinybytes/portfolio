
import './helloMarquee.scss'
import Marquee from "react-fast-marquee";


const HelloMarquee = () => {
    return (
        <div className='Marqueecontainer'>

            <Marquee autoFill="true" id="Marquee">
            <div class="willkommen">
                <h2>Frontend Developer - Software Developer - App Developer in der Entstehungsphase&nbsp;</h2>
                <h2>Frontend Developer - Software Developer - App Developer in der Entstehungsphase&nbsp;</h2>
                <h2>Frontend Developer - Software Developer - App Developer in der Entstehungsphase&nbsp;</h2>
                <h2>Frontend Developer - Software Developer - App Developer in der Entstehungsphase&nbsp;</h2>
                <h2>Frontend Developer - Software Developer - App Developer in der Entstehungsphase&nbsp;</h2>
                <h2>Frontend Developer - Software Developer - App Developer in der Entstehungsphase&nbsp;</h2>
            </div>
            </Marquee>

        </div>

    )



}

export default HelloMarquee;