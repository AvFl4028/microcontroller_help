//Codigos para la parte de arduino

export const HelloWorld = `void setup(){
        //El codigo que se pone en esta funcion solo se ejecutara 1 vez
        pinMode(13, OUTPUT);    //Se declara como salida el pin digital 13
    }
    
void loop() {
        //El codigo que se pone en esta funcion se ejecutara indefinidamente
        digitalWrite(13, HIGH); //Se enciende el pin digital 13
}`;

export const Blink = `void setup(){
        //El codigo que se pone en esta funcion solo se ejecutara 1 vez
        pinMode(13, OUTPUT);    //Se declara como salida el pin digital 13
    }
    
void loop() {
        //El codigo que se pone en esta funcion se ejecutara indefinidamente

        //Este es ejemplo de Blink el cual es que se encienda y apague un led
        digitalWrite(13, HIGH); //Se enciende el pin digital 13
        delay(100);             //La funcion delay funciona para dar retraso en milisegundos
        digitalWrite(13, LOW);  //Se apaga el pin digital 13
        delay(100);
}`;

export const AnalogRead = `int value;   //Se declara una variable de tipo entero

void setup(){
    Serial.begin(9600); //Se inicializa el puerto Serial
}

void loop(){
    //Se declara que value sea igual al valor leido por el pin A0 que es analogico
    value = analogRead(A0);
    //Se imprime el valor por puerto serial
    Serial.println(value);
}`

export const PWM = `void setup(){
    //NOTA no todos los pines de arduino aceptan PWM
    //Solo los siguientes pines digitales lo aceptan
    // 3, 5, 6, 9, 10, 11
    pinMode(3, OUTPUT); //Se declara salida el pin 3
}

void loop(){
    //Se declara un ciclo for con una variable local i la cual va a ir controlando el valor del PWM
    //En este ciclo ira aumentando el valor de i
    for(size_t i = 0; i < 255; i++){
        analogWrite(3, i);
        delay(15);
    }

    //En este ciclo ira disminuyendo el valor de i
    for(size_t i = 255; i > 0; i--){
        analogWrite(3, i);
        delay(15);
    }
}
`

export const Functions = `void setup(){
    //Se declara el pin 3 como salida
    pinMode(3, OUTPUT);
}

void loop(){
    //Se llama a la función blink
    blink(100);
}

//Se configura la función blick con un parametro de tipo entero 
void blink(int tiempo){
    digitalWrite(3, HIGH);
    delay(tiempo);
    digitalWrite(3, LOW);
    delay(tiempo);
}
`