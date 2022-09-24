import { Badge, Popover, PopoverBody, PopoverHeader } from 'reactstrap'
import Class from './Lesson.module.css'

function Lesson(props: any) {

    let evenFlag = props.week.even
    let oddFlag = props.week.odd

    let even = props.week.even == true && Class.even
    let odd = props.week.odd == true && Class.odd
    let each = (props.week.even && props.week.odd || !props.week.even && !props.week.odd) && Class.each

    let rooms = props.room.split(', ').map(
        (value: any, index: number) => {
            return (
                <p className={`${Class.room}`} key={index}>{value}</p>
            )
        }
    )

    return (
        <div
            className={`${Class.Lesson} ${even} ${odd} ${each}`}
            onClick={props.changeLesson}
        >
            <div className={`${Class.left}`}>
                <div className={`${Class.time}`}>
                    <p>{props.start}</p>
                    <p>{props.finish}</p>
                </div>
                <div className={`${Class.rooms}`}>
                {rooms}
                </div>
            </div>
            <div className={`${Class.info}`}>
                <h5 className={`${Class.name} m-0`}>
                    {props.name}
                </h5>
                {
                    props.type != ''
                    &&
                    <p className='m-0'>
                        {props.type}
                    </p>
                }
                {
                    props.comment != ''
                    &&
                    <p className={`${Class.comment}`}>{props.comment}</p>
                }
                {/* <hr /> */}
                {
                    (props.week.even == true || props.week.odd == true || props.week.other != '')
                    &&
                    <div className={`${Class.weeks} mt-1`}>
                        {
                            props.week.even == true
                            &&
                            <Badge className={`${Class.even_week}`}>ЧН</Badge>
                        }
                        {
                            props.week.odd == true
                            &&
                            <Badge className={`${Class.odd_week}`}>НЧ</Badge>
                        }
                    </div>
                }
                {
                    (props.week.even == true || props.week.odd == true) && props.week.other != ''
                    &&
                    <>
                        +
                    </>
                }
                {
                    props.week.other != ''
                    &&
                    <>
                        <Badge>  {props.week.other}</Badge>

                    </>
                }
                {/* {
                    props.room != ''
                    &&
                    <p className='m-0'>
                        Аудитория: <b>{props.room}</b>
                    </p>
                } */}
                {
                    props.mentor.fullname != ''
                    &&
                    <>
                        <h6 className={`${Class.name} m-0`}>
                            {props.mentor.fullname}
                        </h6></>
                }

            </div>
        </div>
    )
}

export default Lesson