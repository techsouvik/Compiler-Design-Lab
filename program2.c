#include <stdio.h>
#include<string.h>

int main(int argc, char *argv[])
{
char s[20];
    strcpy(s, argv[1]);
    switch (s[0])
    {
    case '>':
        if (s[1] == '=')
        {
            printf("\n Greater than or equal.\n\n");
        } 
        else
        {
            printf("\n Greater than.\n\n");
} break;
    case '<':
        if (s[1] == '=')
        {
            printf("\n Less than or equal.\n\n");
} else {
            printf("\n Less than.\n\n");
        }
break;
    case '=':
        if (s[1] == '=')
        {
            printf("\n Equal to operator.\n\n");
} else {
            printf("\n Assignment operator.\n\n");
        }
break;
    case '&':
        if (s[1] == '&')
{
            printf("\n Logical AND.\n\n");
} else
        {
            printf("\n Bitwise AND.\n\n");
} break;
    case '|':
        if (s[1] == '|')
        {
            printf("\n Logical OR.\n\n");
} else {
            printf("\n Bitwise OR.\n\n");
        }
break;
    case '!':
        if (s[1] == '=')
        {
            printf("\n Not equal.\n\n");
} else {
            printf("\n Bitwise Not.\n\n");
        }
break;
    case '+':
        printf("\n Addition.\n\n");
        break;
    case '-':
        printf("\n Subtraction.\n\n");
        break;
    case '*':
        printf("\n Multiplication.\n\n");
        break;
    case '/':
        printf("\n Division.\n\n");
        break;
    case '%':
        printf("\n Modulus.\n\n");
        break;
default:
        printf("\n Not a valid operator!!!\n\n");
    }
    return 0;
}