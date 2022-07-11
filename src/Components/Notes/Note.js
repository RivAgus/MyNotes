import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

function Note({ id, text, deleteNote }) {
return (
<div className="note">
    <div className="note__body">
        {text}</div>
    <div className="note__footer" style={{ justifyContent: "flex-end" }}>
    <ClearOutlinedIcon
        className="note__delete"
        onClick={() => deleteNote(id)}
        aria-hidden="true"
    ></ClearOutlinedIcon>
    </div>
</div>
);
}

export default Note;
