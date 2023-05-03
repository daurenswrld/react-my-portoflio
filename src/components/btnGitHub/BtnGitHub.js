import './style.css';
import gitImg from './../../img/icons/gitHub-black.svg';

const BtnGitHub = ({ linkGit }) => {
    return (
        <a href={linkGit} className="btn-outline" target='_blank' rel="noreferrer">
            <img src={gitImg} alt="" />
            GitHub repo
        </a>
    );
}

export default BtnGitHub;