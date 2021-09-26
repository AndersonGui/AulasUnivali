using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Calculadora
{
    public partial class Form1 : Form
    {
        public string Valor01 { get; set; }
        public string Valor02 { get; set; }
        public string Operacao { get; set; }

        public Form1()
        {
            InitializeComponent();
        }

        private void montarExibicao() {
            var exibicao = string.Empty;

            if (string.IsNullOrEmpty(Valor01))
            {
                exibicao = string.Empty;
            }
            else if (string.IsNullOrEmpty(Operacao)) {
                exibicao = Valor01;
            } else if (string.IsNullOrEmpty(Valor02)) {
                exibicao = $"{Valor01} {Operacao}";
            }
            else {
                exibicao = $"{Valor01} {Operacao} {Valor02}";
            }

            labelResultado.Text = exibicao;
        }

        private void label11_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(Valor01) && !string.IsNullOrEmpty(Operacao) && !string.IsNullOrEmpty(Valor02))
            {
                var valor01 = int.Parse(Valor01);
                var valor02 = int.Parse(Valor02);
                var resultado = 0;

                if (Operacao == "+")
                {
                    resultado = valor01 + valor02;
                }
                else if (Operacao == "-")
                {
                    resultado = valor01 - valor02;
                }
                else if (Operacao == "*")
                {
                    resultado = valor01 * valor02;
                }
                else if (Operacao == "/")
                {
                    resultado = valor01 / valor02;
                }

                labelResultado.Text = $"{resultado}";
                Valor01 = string.Empty;
                Valor02 = string.Empty;
                Operacao = string.Empty;
            }
        }

        private void inserirOperacao(string operacao)
        {
            if (!string.IsNullOrEmpty(Valor01) && string.IsNullOrEmpty(Valor02) && string.IsNullOrEmpty(Operacao))
            {
                Operacao = operacao;
                montarExibicao();
            }
        }

        private void inserirValor(string valor)
        {
            if (string.IsNullOrEmpty(Operacao))
            {
                Valor01 += valor;
            }
            else
            {
                Valor02 += valor;
            }
        }

        private void label10_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(Operacao))
            {
                if (string.IsNullOrEmpty(Valor01) == false)
                {
                    Valor01 += "0";
                }
            }
            else {
                if (string.IsNullOrEmpty(Valor02) == false)
                {
                    Valor02 += "0";
                }
            }

            montarExibicao();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            labelResultado.Text = string.Empty;
        }

        private void label12_Click(object sender, EventArgs e)
        {
            inserirOperacao("+");
            montarExibicao();
        }

        private void label15_Click(object sender, EventArgs e)
        {
            inserirOperacao("-");
            montarExibicao();
        }

        private void label14_Click(object sender, EventArgs e)
        {
            inserirOperacao("*");
            montarExibicao();
        }

        private void label13_Click(object sender, EventArgs e)
        {
            inserirOperacao("/");
            montarExibicao();
        }

        private void label1_Click(object sender, EventArgs e)
        {
            inserirValor("1");
            montarExibicao();
        }

        private void label2_Click(object sender, EventArgs e)
        {
            inserirValor("2");
            montarExibicao();
        }

        private void label3_Click(object sender, EventArgs e)
        {
            inserirValor("3");
            montarExibicao();
        }

        private void label6_Click(object sender, EventArgs e)
        {
            inserirValor("4");
            montarExibicao();
        }

        private void label5_Click(object sender, EventArgs e)
        {
            inserirValor("5");
            montarExibicao();
        }

        private void label4_Click(object sender, EventArgs e)
        {
            inserirValor("6");
            montarExibicao();
        }

        private void label7_Click(object sender, EventArgs e)
        {
            inserirValor("7");
            montarExibicao();
        }

        private void label8_Click(object sender, EventArgs e)
        {
            inserirValor("8");
            montarExibicao();
        }

        private void label9_Click(object sender, EventArgs e)
        {
            inserirValor("9");
            montarExibicao();
        }
    }
}
