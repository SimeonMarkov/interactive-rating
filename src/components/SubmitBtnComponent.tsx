import '../submit-btn.css';
import {useNavigate} from "react-router";

type Props = {
    selectedRate: number | null;
}

export function SubmitBtnComponent({ selectedRate } : Props ) {
    const navigate = useNavigate();
    return <button className='submit-btn' disabled={!selectedRate} onClick={() => navigate("/thanks", {
        state: { selectedRate }
    })}>Submit</button>;
}