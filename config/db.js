const app = require("../index");

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  "mongodb+srv://atultingrecodes:<db_password>@cluster0.5brac.mongodb.net/campaign-tracker";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Connection error", error.message);
  });
