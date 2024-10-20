import photoApi from "../../../photoApp/src/utils/photoApi";
import profileApi from "../../../profileApp/src/utils/profileApi";

class MainApi {
  constructor({ address, token, groupId }) {
    // стандартная реализация -- объект options
    this._token = token;
    this._groupId = groupId;
    this._address = address;

    // Запросы в примере работы выполняются к старому Api, в новом URL изменены.
  }

  getAppInfo() {
    return Promise.all([photoApi.getCardList(), profileApi.getUserInfo()]);
  }
}

const api = new MainApi({
  address: 'https://nomoreparties.co',
  groupId: `cohort0`,
  token: `80a75492-21c5-4330-a02f-308029e94b63`,
});

export default api;
