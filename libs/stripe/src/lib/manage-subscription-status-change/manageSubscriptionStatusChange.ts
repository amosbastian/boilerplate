export const toDateTime = (seconds: number) => {
  const dateTime = new Date("1970-01-01T00:30:00Z"); // Epoch start
  dateTime.setSeconds(seconds);
  return dateTime;
};

export const manageSubscriptionStatusChange = async (
  subscriptionId: string,
  customerId: string,
  createAction = false,
) => {
  return;
};
