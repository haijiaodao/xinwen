const { Component, forwardRef } = React;
const { render } = ReactDOM;
const appNode = document.getElementById("app");

const mockData = [
{
  "id": 1,
  "name": "S.",
  "username": "钻石VIP",
  "email": "2024/7/18-2099/12/31",
  "phone": "永久会员",
  "website": "￥：999",
  "company": {
    "name": "20240718" } },


{
  "id": 2,
  "name": "史开鹏",
  "username": "钻石VIP",
  "email": "2024/7/18-2099/12/31",
  "phone": "永久会员",
   "website": "￥：999",
  "company": {
    "name": "20240719" } },


{
  "id": 3,
"name": "庞立莉",
  "username": "黄金VIP",
  "email": "2024/7/18-2029/7/17",
  "phone": "5年期会员",
   "website": "￥：499",
  "company": {
    "name": "20240720" } },


{
  "id": 4,
  "name": "Patricia Lebsack",
  "username": "Karianne",
  "email": "Julianne.OConner@kory.org",
  "phone": "493-170-9623 x156",
  "website": "kale.biz",
  "company": {
    "name": "Robel-Corkery" } },


{
  "id": 5,
  "name": "Chelsey Dietrich",
  "username": "Kamren",
  "email": "Lucio_Hettinger@annie.ca",
  "phone": "(254)954-1289",
  "website": "demarco.info",
  "company": {
    "name": "Keebler LLC" } },


{
  "id": 6,
  "name": "Mrs. Dennis Schulist",
  "username": "Leopoldo_Corkery",
  "email": "Karley_Dach@jasper.info",
  "phone": "1-477-935-8478 x6430",
  "website": "ola.org",
  "company": {
    "name": "Considine-Lockman" } },


{
  "id": 7,
  "name": "Kurtis Weissnat",
  "username": "Elwyn.Skiles",
  "email": "Telly.Hoeger@billy.biz",
  "phone": "210.067.6132",
  "website": "elvis.io",
  "company": {
    "name": "Johns Group" } },


{
  "id": 8,
  "name": "Nicholas Runolfsdottir V",
  "username": "Maxime_Nienow",
  "email": "Sherwood@rosamond.me",
  "phone": "586.493.6943 x140",
  "website": "jacynthe.com",
  "company": {
    "name": "Abernathy Group" } },


{
  "id": 9,
  "name": "Glenna Reichert",
  "username": "Delphine",
  "email": "Chaim_McDermott@dana.io",
  "phone": "(775)976-6794 x41206",
  "website": "conrad.com",
  "company": {
    "name": "Yost and Sons" } },


{
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz",
  "phone": "024-648-3804",
  "website": "ambrose.net",
  "company": {
    "name": "Hoeger LLC" } },
{
  "id": 11,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz",
  "phone": "024-648-3804",
  "website": "ambrose.net",
  "company": {
    "name": "Hoeger LLC" }},
{
  "id": 10,
  "name": "Clementina DuBuque",
  "username": "Moriah.Stanton",
  "email": "Rey.Padberg@karina.biz",
  "phone": "024-648-3804",
  "website": "ambrose.net",
  "company": {
    "name": "Hoeger LLC" } }];




const User = forwardRef((props, ref) => {
  return (
    React.createElement("div", { className: "user", ref: ref, id: `user-${props.id}` },
    React.createElement("div", { className: "user-header" },
    React.createElement("div", { className: "user-avatar" },
    React.createElement("img", {
      src: `https://randomuser.me/api/portraits/${props.gender}/${
      props.id
      }.jpg` })),


    React.createElement("div", { className: "user-basic-info" },
    React.createElement("div", { className: "user-nick" }, props.nick),
    React.createElement("div", { className: "user-fullname" }, props.name))),


    React.createElement("div", { className: "user-info" },
    React.createElement("span", { className: "user-title" }, "会员号"),
    React.createElement("span", { className: "user-data" }, props.company)),

    React.createElement("div", { className: "user-info" },
    React.createElement("span", { className: "user-title" }, "有效期"),
    React.createElement("span", { className: "user-data" }, props.email)),

    React.createElement("div", { className: "user-info" },
    React.createElement("span", { className: "user-title" }, "会员类型"),
    React.createElement("span", { className: "user-data" }, props.phone)),

    React.createElement("div", { className: "user-info" },
    React.createElement("span", { className: "user-title" }, "充值金额"),
    React.createElement("span", { className: "user-data" }, props.website)),

    ));


});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockData };

    this.userRefs = [];
    this.handleRemoveUser = this.handleRemoveUser.bind(this);
  }

  handleRemoveUser(e) {
    const userId = e.target.getAttribute('data-id');
    const { data } = this.state;

    const removeTimeline = new TimelineMax({ onComplete: () => {
        const newData = data.filter(d => d.id !== parseInt(userId));
        this.setState({ data: newData });
      } });

    const userRef = document.getElementById(`user-${userId}`);
    removeTimeline.
    set(userRef, { height: userRef.offsetHeight }).
    set(userRef.querySelector('.user-remove'), { opacity: 0 }).
    staggerTo(userRef.querySelectorAll('*:not(.user-remove)'), .2, { opacity: 0, y: -10 }, .02).
    to(userRef, .5, { width: 0, marginLeft: 0, marginRight: 0, opacity: 0 }, '-=.2');
  }

  componentDidMount() {
    TweenMax.staggerFromTo(this.userRefs, .6, { autoAlpha: 0, y: -30 }, { autoAlpha: 1, y: 0 }, .15);
  }

  handleData() {
    this.setState({ data: mockData }, () => TweenMax.staggerFromTo(this.userRefs, .6, { autoAlpha: 0, y: -30 }, { autoAlpha: 1, y: 0 }, .15));
  }

  render() {
    const { data } = this.state;
    const userList = data.map((user, index) => {
      return (
        React.createElement(User, {
          ref: ref => this.userRefs[index] = ref,
          key: user.id,
          gender: user.id % 2 === 0 ? "men" : "women",
          id: user.id,
          nick: user.username,
          name: user.name,
          company: user.company.name,
          email: user.email,
          phone: user.phone,
          website: user.website,
          onRemoveUser: this.handleRemoveUser }));


    });

    return (
      React.createElement("div", { class: "user-list" },
      userList.length > 0 ? userList : this.handleData()));

  }}


render(React.createElement(App, null), appNode);