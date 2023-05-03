import './style.css';

const BtnLive = (props) => {
    return (
        <a href={props.linkLive} className="btn-outline" target='_blank' rel="noreferrer">
            {/* <img src={gitImg} alt="" /> */}
            Open live
        </a>
    );
}

export default BtnLive;