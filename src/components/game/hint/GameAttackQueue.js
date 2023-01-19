import { useEffect, useRef, useState } from "react";
import {
  BsCircleFill,
  BsFillCaretDownFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { RiSwordLine } from "react-icons/ri";
import { motion } from "framer-motion";

import { PLAYER_COLORS } from "../../../constants";

const Point = ({ color, current, checked, idx, firstLoad }) => {
  const circleSize = 25;

  return (
    <motion.div
      className={`p-2 text-white ${idx % 3 === 0 && idx !== 0 ? "ml-4" : null}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.1,
        delay: firstLoad ? 0.3 + 0.06 * idx : 0,
      }}
      key={idx}
    >
      {current ? (
        <div className="flex justify-center items-center w-[25px] h-[25px] absolute">
          <RiSwordLine size={circleSize - 4} className="text-slate-800" />
        </div>
      ) : null}
      {checked ? (
        <BsFillCheckCircleFill
          size={circleSize}
          color={color}
          className="bg-black/80 rounded-full shadow-lg shadow-black/40"
        />
      ) : (
        <BsCircleFill
          size={circleSize}
          color={color}
          className="bg-black/80 rounded-full shadow-lg shadow-black/40"
        />
      )}
      {current ? (
        <div className="flex justify-center">
          <BsFillCaretDownFill size="34" className="absolute bottom-[28px]" />
        </div>
      ) : null}
    </motion.div>
  );
};

const GameAttackQueue = ({ roomInfo }) => {
  const firstLoad = useRef(true);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
  }, []);

  return (
    <div className="absolute text-white px-4 bottom-[10%] right-[2%]">
      {showHint ? (
        <motion.div
          className="flex justify-center items-center p-0.5 text-slate-300 transition-all"
          initial={{ scale: 0.4 }}
          animate={{ scale: 1 }}
          key={roomInfo}
          transition={{ duration: 0.02 }}
        >
          Válčení o kraje
        </motion.div>
      ) : null}

      <motion.div
        className="bg-slate-600/80 rounded-full flex px-1 shadow-md shadow-black/80"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setShowHint(true)}
        onHoverEnd={() => setShowHint(false)}
      >
        {roomInfo.attackRegionHistory.map((player, index) => {
          return (
            <Point
              idx={index}
              key={index}
              color={PLAYER_COLORS[roomInfo.playerColors[player]]}
              current={false}
              checked={true}
              firstLoad={firstLoad.current}
            />
          );
        })}
        {roomInfo.currentAttack ? (
          <Point
            idx={roomInfo.attackRegionHistory.length}
            color={
              PLAYER_COLORS[
                roomInfo.playerColors[roomInfo.currentAttack.attacker]
              ]
            }
            current={true}
            checked={false}
            firstLoad={firstLoad.current}
          />
        ) : null}
        {roomInfo.attackRegionQueue.map((player, index) => {
          return (
            <Point
              idx={
                roomInfo.currentAttack
                  ? roomInfo.attackRegionHistory.length + index + 1
                  : roomInfo.attackRegionHistory.length + index
              }
              key={index}
              color={PLAYER_COLORS[roomInfo.playerColors[player]]}
              current={false}
              checked={false}
              firstLoad={firstLoad.current}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default GameAttackQueue;
