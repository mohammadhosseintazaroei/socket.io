io.use((socket, next) => {
  const token = "dfadsfads";
  if (!token) {
    const error = new Error("unathorize");
    error.data = { content: "any error" };
    next(error);
  }
});
