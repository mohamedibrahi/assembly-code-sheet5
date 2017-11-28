sheet number 5 ++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
number 1

-(x+y-2z+1)
------------------

.586
.MODEL FLAT
include io.h
.STACK 4096
.DATA
	  message1_out byte "result is ",0
	  mes1 BYTE "enter first number ",0
	  mes2 BYTE "enter second number ",0
	  mes3 BYTE "enter third  number ",0
	     x DD 40 DUP(?)
		 y DD 40 DUP(?)
		 z DD 40 DUP(?)
		  res DWORD  40 DUP(?)
.CODE
MainProc   PROC
		input mes1,x,40
		atod x
		mov x,eax
		input mes2,y,40
		atod y
		mov y,eax
		add eax,x
		mov y,eax
		input mes3,z,40
		atod z
		mov z,eax
		mov eax,y
		sub eax,z
		sub eax,z
		add eax,1
		neg eax
		mov res,eax
		mov eax,res
		dtoa res,eax
		
		output message1_out ,res
      
	
	
mov eax ,0
RET 
MainProc   ENDP
END


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
number 2

2(x+y)+z
-----------

.586
.MODEL FLAT
include io.h
.STACK 4096
.DATA
	  message1_out byte "result is ",0
	  mes1 BYTE "enter first number ",0
	  mes2 BYTE "enter second number ",0
	  mes3 BYTE "enter third  number ",0
	     x DD 40 DUP(?)
		 y DD 40 DUP(?)
		 z DD 40 DUP(?)
		  res DWORD  40 DUP(?)
.CODE
MainProc   PROC
		input mes1,x,40
		atod x
		mov x,eax
		input mes2,y,40
		atod y
		mov y,eax
		add eax,x
		mov y,eax
		imul eax,2
		mov res,eax
		input mes3,z,40
		atod z
		mov z,eax
		mov eax,res
		add eax,z
		mov res ,eax
		dtoa res,eax
		
		output message1_out ,res
      
	
	
mov eax ,0
RET 
MainProc   ENDP
END
  

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
number 3

perimeter of rectangle =(2*l+2*w)
---------------------------------

.586
.MODEL FLAT
include io.h
.STACK 4096
.DATA
	  message1_out byte "result is ",0
	  mes1 BYTE "enter width of rectangle ",0
	  mes2 BYTE "enter length of rectangle ",0
	     w DD 40 DUP(?)
		 l DD 40 DUP(?)
		 
		  res DWORD  40 DUP(?)
.CODE
MainProc   PROC
		input mes1,w,40
		atod w
		mov w,eax
		imul eax,2
		mov w,eax
		input mes2,l,40
		atod l
		mov l,eax
		imul eax,2
		add eax,w
		mov res,eax
		dtoa res,eax
		
		output message1_out ,res
      
	
	
mov eax ,0
RET 
MainProc   ENDP
END


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
number 4 

number and total of coins
----------------------------


.586
.MODEL FLAT
include io.h
.STACK 4096
.DATA
	  mes1_out byte "result of total = ",0
	  mes2_out byte "number of all coins =",0
	  mes3_out byte "coins by dollar =",0
	  mes4_out byte "reminder is =",0
	  mes1 BYTE "enter numer of pennies ",0
	  mes2 BYTE  "enter numer of nickels ",0
	  mes3 BYTE  "enter numer of dimes ",0
	  mes4 BYTE  "enter numer of quarters ",0
	  mes5 BYTE  "enter numer of fifity_cents",0
	  mes6 BYTE  "enter numer of dollers",0
	 
	     p  DD 40 DUP(?)      ; p=pienns =1
		 n  DD 40 DUP(?)	  ; n=nickels =5
		 d_i  DD 40 DUP(?)	  ; di=dimes=10
		 q  DD 40 DUP(?)	  ; q=quarters =25
		 f  DD 40 DUP(?)	  ; f=fifty_cents=50
		 d  DD 40 DUP(?)	  ; d=dollar =100
		
		 sum_of_coins DD 40 DUP(?)
		 totalcoins   DD 40 DUP(?)
		 sumdollar DD 40 DUP(?)
		 re DD 40 DUP(?)
.CODE
MainProc   PROC

		input mes1,p,40
		atod p
		mov p,eax
		mov  sum_of_coins,eax
		mov  totalcoins ,eax

		input mes2,n,40
		atod n
		mov n,eax
		imul eax,5
		add  eax,totalcoins
		mov totalcoins,eax
		mov eax,sum_of_coins
		add eax,n
		mov sum_of_coins,eax
		
		input mes3,d_i,40
		atod d_i
		mov d_i,eax
		imul eax,10
		add  eax,totalcoins
		mov totalcoins,eax
		mov eax,sum_of_coins
		add eax,d_i
		mov sum_of_coins,eax
		
		input mes4,q,40
		atod q
		mov q,eax
		imul eax,25
		add  eax,totalcoins
		mov totalcoins,eax
		mov eax,sum_of_coins
		add eax,q
		mov sum_of_coins,eax
		
		input mes5,f,40
		atod f
		mov f,eax
		imul eax,50
		add  eax,totalcoins
		mov totalcoins,eax
		mov eax,sum_of_coins
		add eax,f
		mov sum_of_coins,eax
			
		input mes6,d,40
		atod d
		mov d,eax
		imul eax,100
		add  eax,totalcoins
		mov totalcoins,eax
		mov eax,sum_of_coins
		add eax,d
		mov sum_of_coins,eax

	   mov eax,totalcoins
	    mov sumdollar,eax
	   dtoa totalcoins,eax
	   output mes1_out,totalcoins    ; the sum of coins by cents

	   
	   mov eax,sum_of_coins
	   
	   dtoa sum_of_coins,eax
	   output mes2_out,sum_of_coins   ; the number of coins that have been entered

	   ; to calcolate by dollar
		 mov eax,0
	   mov eax,sumdollar
	   mov ebx,100
	   mov edx,0
	   
	   cdq
	   Idiv ebx
	 
	  
	   dtoa sumdollar,eax
	   output mes3_out ,sumdollar

	   mov re,edx
	   mov eax,re
	   dtoa re,eax
	   output mes4_out,re


	
mov eax ,0
RET 
MainProc   ENDP
END


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
number 5 
sum and average 
--------------

.586
.MODEL FLAT
include io.h
.STACK 4096
.DATA
	  mes1_out byte "result of sum = ",0
	  mes2_out byte "result of avg = ",0
	  mes3_out byte "reminder =  ",0
	  mes1 BYTE "enter grade : 1 ",0
	  mes2 BYTE "enter grade : 2 ",0
	  mes3 BYTE "enter grade : 3 ",0
	  mes4 BYTE "enter grade : 4 ",0
	     g1  DD 40 DUP(?)
		 g2  DD 40 DUP(?)
		 g3  DD 40 DUP(?)
		 g4  DD 40 DUP(?)
		 sum DWORD  40 DUP(?)
		 avg DWORD  40 DUP(?)
		 s   DWORD 4
		 sum2 DWORD 40 DUP(?)
		 re DD 40 DUP(?)
.CODE
MainProc   PROC
		input mes1,g1,40
		atod g1
		mov sum,eax
		input mes2,g2,40
		atod g2
		add eax,sum
		mov sum,eax
		input mes3,g3,40
		atod g3
		add eax,sum
		mov sum,eax
		input mes4,g4,40
		atod g4
		add eax,sum
		mov sum,eax
		mov sum2,eax
		dtoa sum,eax
		output mes1_out ,sum
         ;tocalculate average
		  
		  mov eax,sum2
		mov edx,0
		mov ebx,s
		CDQ
		div ebx
		dtoa avg,eax
		output mes2_out,avg
          
		 dtoa re,edx
		 output mes3_out,re 
		   
	
	
mov eax ,0
RET 
MainProc   ENDP
END
  
  

 
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
number 6
gpa
-----------
.586
.MODEL FLAT
include io.h
.STACK 4096
.DATA
	  mes1_out byte "result of sum = ",0
	  mes2_out byte "result of sum of weight = ",0
	  mes3_out byte "average =",0
	  mes4_out byte "reminder=",0
	  mes1 BYTE "enter grade : 1 ",0
	  mes2 BYTE "enter grade : 2 ",0
	  mes3 BYTE "enter grade : 3 ",0
	  mes4 BYTE "enter grade : 4 ",0
	  mes11 BYTE "enter weight grade : 1 ",0
	  mes22 BYTE "enter weight grade : 2 ",0
	  mes33 BYTE "enter weight grade : 3 ",0
	  mes44 BYTE "enter weight grade : 4 ",0
	     g1  DD 40 DUP(?)
		 g2  DD 40 DUP(?)
		 g3  DD 40 DUP(?)
		 g4  DD 40 DUP(?)
		 w1  DD 40 DUP(?)
		 w2  DD 40 DUP(?)
		 w3  DD 40 DUP(?)
		 w4  DD 40 DUP(?)
		  weightsum  DWORD  40 DUP(?)
		 sum_of_weight DWORD  40 DUP(?)
		 sum_of_weight2 DWORD  40 DUP(?)
		  weightsum2 DWORD  40 DUP(?)
		 avg DWORD  40 DUP(?)
		 re DD 40 DUP(?)

.CODE
MainProc   PROC

		input mes1,g1,40
		atod g1
		mov  weightsum,eax
		input mes11,w1,40
		atod w1
		mov w1,eax
		mov sum_of_weight,eax
		mov eax, weightsum
		imul eax,w1
		mov   weightsum,eax

		input mes2,g2,40
		atod g2
		mov g2,eax
		input mes22,w2,40
		atod w2
		mov w2,eax
		imul  eax,g2
		add eax, weightsum
		mov  weightsum,eax
		mov eax,sum_of_weight
		add eax,w2
		mov sum_of_weight,eax

		input mes3,g3,40
		atod g3
		mov g3,eax
		input mes33,w3,40
		atod w3
		mov w3,eax
		imul  eax,g3
		add eax, weightsum
		mov  weightsum,eax
		mov eax,sum_of_weight
		add eax,w3
		mov sum_of_weight,eax

		input mes4,g4,40
		atod g4
		mov g4,eax
		input mes44,w4,40
		atod w4
		mov w4,eax
		imul  eax,g4
		add eax, weightsum
		mov  weightsum,eax
		mov eax,sum_of_weight
		add eax,w4
		mov sum_of_weight,eax

		mov  eax ,weightsum
		mov  weightsum2,eax
		dtoa  weightsum,eax
		output mes1_out, weightsum      ;sum = weight*grade+....
		
		mov eax,sum_of_weight
		mov sum_of_weight2,eax
		dtoa sum_of_weight,eax
		output mes2_out,sum_of_weight    ;number of clock

	; to calcolate average 

	mov edx,0
	mov eax, weightsum2
	mov  ebx,sum_of_weight2
	CDQ
	div ebx
	 mov avg,eax
	 mov re,edx
	dtoa weightsum2,eax
	output mes3_out,weightsum2

	mov eax,re
	dtoa re,eax
	output mes4_out,re

	
	
mov eax ,0
RET 
MainProc   ENDP
END
  


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
