import { useContext } from "react";
import QuestionTimer from "../QuestionTimer";
import SocketContext from "../../../../context/SocketContext";
import AuthContext from "../../../../context/AuthContext";
import { GAME_STATES, PLAYER_COLORS } from "../../../../constants";

const ImageResults = ({ answer }) => {
  const { roomInfo } = useContext(SocketContext);
  const { username } = useContext(AuthContext);

  const getAnswerBackgroundColor = (ans) => {
    const colors = [];

    roomInfo.currentQuestion.answers.forEach((playerAns) => {
      if (playerAns.answer === ans) {
        colors.push(PLAYER_COLORS[roomInfo.playerColors[playerAns.username]]);
      }
    });

    if (colors.length === 0) {
      if (roomInfo.currentQuestion.involvedPlayers.includes(username)) {
        return "#334454";
      }
      return "rgba(51, 68, 84, 0.3)";
    }
    if (colors.length === 1) return colors[0];
    if (colors.length === 2)
      return `linear-gradient(90deg, ${colors.join(",")}`;
  };

  return (
    <div
      className={`border-slate-200/40 border-2 rounded-md bg-slate-900/70 text-white drop-shadow-[0_1px_40px_rgba(0,0,0,0.5)]`}
    >
      <div className="flex justify-center items-center p-2 bg-slate-800 rounded-t-md">
        <div className="question-question max-w-[640px]">
          {roomInfo.currentQuestion.question}{" "}
          <span className="question-category">
            {roomInfo.currentQuestion.category}
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center pt-4 px-2">
        <img
          src={roomInfo.currentQuestion.image_url}
          alt="question"
          className="object-contain max-h-[520px] max-w-[640px] rounded-md border-slate-600 border-2"
        />
      </div>
      {roomInfo.currentQuestion.answers ? (
        <div className="grid grid-cols-2 p-4">
          {roomInfo.currentQuestion.possibleAnswers.map((ans, index) => (
            <div className="flex justify-center items-center" key={index}>
              <div className="w-[340px] h-[60px] flex m-2 rounded-md relative">
                <div
                  className={`h-[60px] w-full rounded-md blocker opacity-80 absolute ${
                    ans === roomInfo.currentQuestion.rightAnswer
                      ? "animate-bounce bottom-[-8px]"
                      : null
                  }`}
                  style={{ background: getAnswerBackgroundColor(ans) }}
                />
                <div
                  className={`w-[340px] h-[60px] flex items-center justify-center border-white/40 border-2 absolute blocker ${
                    ans === roomInfo.currentQuestion.rightAnswer
                      ? "border-amber-300 border-4 animate-bounce bottom-[-6px]"
                      : null
                  } rounded-md`}
                >
                  <p className="pick-question-answer">{ans}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 p-4">
          {roomInfo.currentQuestion.possibleAnswers.map((ans, index) => (
            <div className="flex justify-center items-center" key={index}>
              <div
                className={`w-[340px] h-[60px] flex items-center justify-center border-white/40 border-2 m-2 p-2 rounded-md ${
                  roomInfo.currentQuestion.involvedPlayers.includes(username)
                    ? "bg-slate-700"
                    : "bg-slate-700/30"
                }`}
                style={{
                  backgroundColor:
                    ans === answer
                      ? PLAYER_COLORS[roomInfo.playerColors[username]]
                      : "",
                }}
              >
                <p className="pick-question-answer">{ans}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div
        style={{
          opacity:
            roomInfo.gameState === GAME_STATES.QUESTION_RESULTS ? 0 : 100,
        }}
      >
        <QuestionTimer warn={false} />
      </div>
    </div>
  );
};

export default ImageResults;
