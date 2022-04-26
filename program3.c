#include<stdio.h>
// #include<conio.h>
#include<ctype.h>

void main(int argc, char *argv[])
{
    char a[10];
    int flag, i=1;
    //clrscr();
    printf("\n Enter an identifier:");
    strcpy(a, argv[1]);
    if(isalpha(a[0]))
    flag=1;
    else
    printf("\n Not a valid identifier");
    while(a[i]!='\0')
    {

        if(!isdigit(a[i])&&!isalpha(a[i]))
        {
            flag=0;
            break;
        }
        i++;
    }
    if(flag==1)
    printf("\n Valid identifier");
    getch();

}