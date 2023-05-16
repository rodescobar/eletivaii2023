#include <LiquidCrystal.h>

const int rs = 3, en = 4, 
		  d4 = A2, d5 = A3, 
		  d6 = A4, d7 = A5;

LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup() {
  lcd.begin(16, 2);
}

void loop() {
  //limpar a tela
  lcd.clear();
  
  lcd.setCursor(7,0);
  
  lcd.print("ITE");
  
  lcd.setCursor(5,1);
  lcd.print("ROBOTICA");
  //delay(1000);
  for(int i = 1; i < 6; i++) {
    lcd.scrollDisplayLeft();
    delay(300);
  }
  
  for (int i = 1; i < 9; i++) {
    lcd.scrollDisplayRight();
    delay(300);    
  }
  
  
  for(int i = 1; i < 4; i++) {
    lcd.scrollDisplayLeft();
    delay(300);
  }
}