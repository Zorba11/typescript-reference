const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lang: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number} = profile;
const { coords: { lat, lang } }: { coords: { lat: number, lang: number}}  = profile;



