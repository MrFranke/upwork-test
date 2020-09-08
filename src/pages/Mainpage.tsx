import React from 'react';
import css from './Mainpage.module.css';
import { Col, Row } from "react-bootstrap";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { BsPlusCircle, BsColumns } from "react-icons/bs";
import { useStore } from "effector-react";
import { completedTasks$, inProgressTasks$, addTask } from "../store/tasks";



export const Mainpage: React.FC = () => {
  const completed$ = useStore(completedTasks$);
  const inProgress$ = useStore(inProgressTasks$);
  return (
    <div>
      <Row>
        <Col md={3}><h2><BsColumns/>&nbsp;Dashboard</h2></Col>
        <Col md={{offset: 5}}><h2 className={'text-center'}>Principal Loae Yurns Maike UIP YU. Ban James</h2></Col>
      </Row>
      <div>
        <Row>
          <Col><h1>In Progress</h1></Col>
        </Row>
        <div className={css.CardsContainer}>
          {inProgress$.map((_, idx) => (
            <InfoCard title={'Priniciap Examiner (FFFF)'}
                      completed={122}
                      remaining={22}
                      progress={25}
                      date={new Date()}
                      key={idx}
            />
          ))}
        </div>
      </div>
      <div>
        <Row>
          <Col><h1>Completed</h1></Col>
        </Row>
        <div className={css.CardsContainer}>
          {completed$.map((_, idx) => (
            <InfoCard
              title={'Priniciap Examiner (FFFF)'}
              completed={144}
              remaining={0}
              progress={100}
              date={new Date()}
              key={idx}
            />
          ))}
          <div className={css.BtnCard}>
            <button className={css.AddBtn} onClick={() => {
              addTask({
                title: 'Priniciap Examiner (FFFF)',
                completed: 122,
                remaining: 0,
                progress: 100,
                date: new Date()
              })
            }}><BsPlusCircle/></button>
          </div>
        </div>
      </div>
    </div>
  );
};
