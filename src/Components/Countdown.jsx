import { useEffect, useRef, useState } from 'react';
import './Countdown.css';

const today = new Date ();
const Countdown = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    
    const countdown = new Date ('07/01/2022')

  interval = setInterval(() => {

    const now = new Date().getTime();
    const difference = countdown - now;


    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minutes = Math.floor((difference % (1000 * 60 * 60 )) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
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
  })

  return (
    <section className="countdown">
      <h1 className='title'>LEEZY BOOST 103</h1>
      <section className='countdown-timer'>
      <span>{timerDays}</span>
      <span>{timerHours}</span>
      <span>{timerMinutes}</span>
      <span>{timerSeconds}</span>
      </section>
      <section className='duration'>
      <span>DAYS HOURS MINS SECS</span>
      
      
      </section>
      <p className='para'>UNTIL DROP</p>
    </section>

  );
};

export default Countdown;