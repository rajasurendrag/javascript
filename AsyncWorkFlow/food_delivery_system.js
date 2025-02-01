const randomId = (range) => Math.floor(Math.random() * range);

export const secElapsedFrom = (startTime) =>
  ((Date.now() - startTime) / 1000).toFixed(2);

export const log = (time, message) => console.log(`[${time}s] ${message}`);

const deliverOrder = (startTime, order) => {
  const orderInfo = { ...order };

  setTimeout(() => {
    const timeNow = secElapsedFrom(startTime);

    orderInfo.deliveryDetails = `Delivered by John at 7:30 PM`;
    log(timeNow, "Delivering order...");
    log(timeNow, `Order Delivered...`);

    return { ...orderInfo };
  }, 5000);
};

const packOrder = (startTime, order) => {
  const orderInfo = { ...order };

  setTimeout(() => {
    const timeNow = secElapsedFrom(startTime);

    orderInfo.packageDetails = "Packed in eco-friendly box";
    log(timeNow, "packing Order...");
    log(timeNow, `Order Packed...`);

    return deliverOrder(startTime, { ...orderInfo });
  }, 2000);
};

const prepareFood = (startTime, items, order) => {
  const orderInfo = { ...order };
  log(secElapsedFrom(startTime), "preparing food...");

  setTimeout(() => {
    orderInfo.foodDetails = items;
    log(secElapsedFrom(startTime), `food is ready...`);

    return packOrder(startTime, { ...orderInfo });
  }, 3000);
};

const order = () => {
  const orderTemplate = { orderId: randomId(1000) };
  log(secElapsedFrom(Date.now()), `Order received...`);

  return prepareFood(Date.now(), "'Burger & Fries'", { ...orderTemplate });
};

// order();
