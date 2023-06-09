import { faker } from "@faker-js/faker";
import { END, eventChannel } from "redux-saga";

const subscriber = () => {
  return eventChannel((emitter) => {
    const s = 110;

    let count = 0;
    const iv = setInterval(() => {
      if (count >= s) {
        emitter(END);
      } else {
        let data = faker.datatype.number({ min: -1000, max: 1000 });
        emitter(data);
        count++;
      }
    }, 1000);

    return () => {
      clearInterval(iv);
    };
  });
};

export default subscriber;
