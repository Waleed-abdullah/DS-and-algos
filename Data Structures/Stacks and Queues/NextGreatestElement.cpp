#include <iostream>
#include<stack>
#include<vector>

using namespace std;
//T O(n) || S O(n)
vector<int> arr = {13,4,6,2,1,7,3,9,15};

void nextGreatestElement(vector<int> arr) {
  int size = arr.size();
  stack<int> stack;
  
  stack.push(arr[0]);

  for(int i = 1; i < size; i++){
      int currVal = arr[i];
      if(stack.empty()) { 
        stack.push(currVal);
      } 

      while(!stack.empty() && stack.top() < currVal) {
        cout << stack.top() << "---->" << currVal << endl; 
        stack.pop();
      }
      stack.push(currVal);
  }
  while(!stack.empty()){
    cout << stack.top() << "---->" << -1 << endl;
    stack.pop(); 
  }

}


int main() {
  
  nextGreatestElement(arr);
}