const names = [];
const fullData =  [];
const buddiesNames = [];
const buddiesData = [];

const loadData = async () =>  {
  try{
   const url = "https://valorant-api.com/v1/agents" 
   const res = await fetch(url);
    console.log("res status+",res.status)
     const data = await res.json();
    return data;
  } catch(err){
    console.log(err)
  }
};
loadData().then(data  => getNames(data));
function getNames(props){
       props.data.map( elem  =>{ 
       names.push(elem.displayName);
       fullData.push(elem);
     });
  showNames();
}

function showNames()  {
  
    let ulForNames = document.getElementById("valorantNames");
       ulForNames.innerHTML = names.map(elem => `<li " class="valorantHero"><a href="#"  onClick="showCharacter(event)" id=${elem}>  ${elem}<a/></li>`).join("");
    // showCharacter();
}
function showCharacter(event){
  fullData.map(elem => {
    if(elem.displayName == event.target.id){
      console.log("item found")
      console.log(elem.description)
      let gotH1Name= document.querySelector("#name")
        gotH1Name.innerHTML = elem["displayName"];
      let gotImgTag= document.querySelector("#heroPic")
        gotImgTag.src = elem["fullPortrait"];
      let gotPforDescription= document.querySelector("#description");
        gotPforDescription.innerHTML = elem["description"];
      let gotPforClass= document.querySelector("#class")
        gotPforClass.innerHTML = elem["role"]["displayName"];
      let gotPforClassDescription = document.querySelector("#classDescription")
        gotPforClassDescription.innerHTML  = elem["role"]["description"]
    }
  })
  console.log(event.target.id);
}

const loadDataBuddies = async () =>  {
  try{
   const url = "https://valorant-api.com/v1/buddies" 
   const res = await fetch(url);
    console.log("res status+",res.status)
     const data = await res.json();
    return data;
  } catch(err){
    console.log(err)
  }
};
loadDataBuddies().then(data  => getBuddyNames(data));

function getBuddyNames(props){
       props.data.map( elem  =>{ 
       buddiesNames.push(elem.displayName);
       buddiesData.push(elem);
     });
   showBuddyNames();
}
function showBuddyNames(){
  // console.log(buddiesNames);
  let ulForBuddyNames = document.getElementById("valorantBuddies");
       ulForBuddyNames.innerHTML = buddiesNames.map(elem => `<li  class="valorantHeroBuddy"><a href="#"  onClick="showCharacterBuddy(event)" id=${elem.replace(/\s+/g, '-')}>  ${elem}<a/></li>`).join("");
}

function showCharacterBuddy(event){
  // console.log(buddiesNames[0].trim());
  console.log(event.target.id.replace(/\-+/g," "))
  
  buddiesData.map(elem => {
    if(elem.displayName == event.target.id.replace(/\-+/g," ")){
      console.log("item found")
      // console.log(elem.description)
      let gotH1Name= document.querySelector("#buddyName")
      gotH1Name.innerHTML = elem["displayName"];
      let gotImageBuddy= document.querySelector("#heroBuddyPic")
      gotImageBuddy.src = elem["displayIcon"];
    }
  })
}


