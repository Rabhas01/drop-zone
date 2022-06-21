import { useEffect, useRef, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const date = new Date("07/01/2022 01:16:30"); // date to which countdown is running

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = date - now;

      const days = ("0" + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2);
      const hours = ("0" + Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
      const minutes = ("0" + Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
      const seconds = ("0" + Math.floor((difference % (1000 * 60)) / 1000)).slice(-2);

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="countdown">
      <h1 className="title">LEEZY BOOST 103</h1>
      <section className="countdown-timer">
        <span>{timerDays.substring(0, 1)}</span>
        <span>{timerDays.substring(1)}</span>

        <span>{timerHours.substring(0, 1)}</span>
        <span>{timerHours.substring(1)}</span>

        <span>{timerMinutes.substring(0, 1)}</span>
        <span>{timerMinutes.substring(1)}</span>

        <span>{timerSeconds.substring(0, 1)}</span>
        <span>{timerSeconds.substring(1)}</span>
      </section>
      <section className="duration">
        <span>DAYS HOURS MINS SECS</span>
      </section>
      <p className="para">UNTIL DROP</p>
    </section>
  );
};

export default Countdown;
