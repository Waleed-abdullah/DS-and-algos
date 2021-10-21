#include <iostream>
using namespace std;

class CircularQueue {
private: 
int* items;
int front, rear, size;
public:
CircularQueue(int size){
  this -> size = size;
  this -> front = -1;
  this -> rear = -1;
  this -> items = new int[size];
}

bool isFull() {
  if(front == 0 && rear == size - 1) {
    return true;
  }
  if(front == rear + 1) {
    return true;
  }
  return false;
}

bool isEmpty() {
  if(front == -1) {
    return true;
  } else {
  return false;
  }
}

void Enqueue(int item) {
  if(isFull()) {
    cout << "Queue is full" << endl;
  } else {
    if(front == -1) front = 0;
    rear = (rear + 1) % size;
    this -> items[rear] = item;
    cout << "Inserted item " << item << endl;
  }
}

int Dequeue() {
if(isEmpty()) {
  cout << "The Queue is empty" << endl;
} else {
  int element = items[front];
  if(front == rear) {
    front = -1;
    rear = -1;
  } else {
    front = (front + 1) % size;
  }
  return element;
}
return -1;
}

void display(){
  if(!isEmpty()) {
    cout << "The Queue is:" << endl;
    int i;
    for(i = front; i != rear; i = (i + 1) % size) {
      cout << items[i] << " ";
    }
    cout << items[i];
    cout << endl;
  }
}

};



int main() {
  CircularQueue q(5);

  // Fails because front = -1
  q.Dequeue();

   q.Enqueue(1);
   q.Enqueue(2);
   q.Enqueue(3);
   q.Enqueue(4);
   q.Enqueue(5);

  // // Fails to enqueue because front == 0 && rear == SIZE - 1
   q.Enqueue(6);

   q.display();

   int elem = q.Dequeue();

   if (elem != -1)
     cout << endl
        << "Deleted Element is " << elem << endl;

   q.display();

   q.Enqueue(0);

   q.display();

  // Fails to enqueue because front == rear + 1
   q.Enqueue(8);

  return 0;
}