import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAYFBMVEX///8AAACDg4Pz8/NycnLX19dsbGz8/PxZWVkhISGxsbGkpKS3t7d5eXlERERgYGDt7e3Ly8vd3d3CwsKbm5uKiopMTEzk5ORUVFSrq6s+Pj4PDw+UlJQcHBzR0dE4ODjSOLEgAAACPUlEQVR4nO3aC3KqQBCFYVoEVEQRBGMSdf+7jJbXkqvMtArNMZXzbSB/DZF5EQREREREREREREREZCfM8xDdcKus4kldT+KqRJdcRWNpGBfonrPRVP6zG6GLjsqbqJMp/FGW91EnK2zVrL1KZIas2riqRDa4qvzTnfWZw7JSd5VIiqpKfFUiCSjLO1iw4Qo//FkfmCmyaHmRNk0xs9DcXyUyh2Sttaw1JCvTsjJIVqxlxcy6qrSsCpK11bK2kKyVloVZdOULf9UCtIYY+7PGmKqg8GfBdkCeVeBxHYiqCqIvd9VXBMsKvt1Z37iqIFi6qpbIqiCv26tq3AbjrHVmxI7VSdIyB21Ru4umfLRrNu0q9AO8iNLDJeqQAl8MLaJyNivfK4noL0rC8B3eog3FvMri5VGcVfO3OP9O9undkn6R7rH3GcnasbJZrnEPtPDuMUC3GUmmnW9lw49YopxQnqUDh+XqKdK/JznoIkfd518NuOPfejZidwY7IPFsw9oMtDVTz7VuDXLO9eRYDTRe6rF3G/Oj8OiVKhHjRX7o2EVratu5Wz1ddjE9dd6/WiWyt6t69RGeGD7Gl36FF3a/xi5VIlZVnQbLbLi021aN0W1sh5/hmc2P8ekp+pbNlN21yuafXrmzeITFXuihPYWfxZcRysXTIwwup8JJ96xJ/6+IzUH/s5pD/19P+a6dHmVwPfXE1tCt/02j4yPA5/T/KaPzK8Bn9P/F4CobdZaBP7AkIiIiIiIiIiIi+t1+ABaMF7u3WELCAAAAAElFTkSuQmCC",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
