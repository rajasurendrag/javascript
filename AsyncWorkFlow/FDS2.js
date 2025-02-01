import { secElapsedFrom, log } from "./food_delivery_system.js";

const task = (begin, finish, time, next) => (takDetails, startTime) => {
  const begunTaskDetails = begin(takDetails, startTime);
  setTimeout(() => {
    const updatedData = finish(begunTaskDetails, startTime);
    next(updatedData, startTime);
  }, time);
};

const deliverOrder = task(
  (orderInfo, startTime) => {
    log(secElapsedFrom(startTime), "delivering order...");
    return { ...orderInfo, deliveryDetails: "Delivered by John at 7:30 PM" };
  },
  (orderInfo, startTime) => {
    log(secElapsedFrom(startTime), "order delivered...");
    return { ...orderInfo };
  },
  5000,
  (od) => od
);

const packOrder = task(
  (orderInfo, startTime) => {
    log(secElapsedFrom(startTime), "packing order...");
    return { ...orderInfo };
  },
  (orderInfo, startTime) => {
    log(secElapsedFrom(startTime), "order packed...");
    return { ...orderInfo, packageDetails: "Packed in eco-friendly box" };
  },
  2000,
  deliverOrder
);

const prepareFood = task(
  (orderInfo, startTime) => {
    log(secElapsedFrom(startTime), "preparing food...");
    return orderInfo;
  },
  (orderInfo, startTime) => {
    log(secElapsedFrom(startTime), "food is ready...");
    return { orderInfo, foodDetails: "biriyani" };
  },
  3000,
  packOrder
);

prepareFood({ orderId: 123 }, Date.now());
