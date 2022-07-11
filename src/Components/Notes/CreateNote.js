import LinearProgress from "@mui/material/LinearProgress";
function CreateNote({ textHandler, saveHandler, inputText }) {
//character limit
const charLimit = 200;
const charLeft = charLimit - inputText.length;
return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
    <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type...."
        onChange={textHandler}
        maxLength="200"
    ></textarea>

    <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>
        Save note
        </button>
    </div>
    
    <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
        sx={{
            backgroundColor: `#FDD9E2`,
            "& .MuiLinearProgress-bar":{
                backgroundColor:`#11245E`
            }
        }}
    />
    </div>
);
}

export default CreateNote;
