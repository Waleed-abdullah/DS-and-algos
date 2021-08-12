//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 3, 4, 5];
const array3 = [2, 5, 5, 2, 3, 5, 1, 2, 4];

//O(n)
function firstRecurringCharacter(input) {
  if (!input || input.length <= 2) {
    return 'Uh oh';
  }

  const characterMap = {};

  for (let i = 0; i < input.length; ++i) {
    let value = input[i];
    if (!characterMap[value]) characterMap[value] = 1;
    else {
      characterMap[value] = characterMap[value] + 1;
      if (characterMap[value] > 1) {
        return value;
      }
    }
  }
  return undefined;
}

firstRecurringCharacter(array3);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
