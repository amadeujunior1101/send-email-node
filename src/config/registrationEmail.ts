import Mail from "../utils/Mail";

export default async function registrationEmail(user: any) {
  await Mail.sendMail({
    from: "Queue Test <queue@queuetest.com.br>",
    to: `${user.name} <${user.email}>`,
    subject: "Cadastro de usuário",
    html: `Olá, ${user.name}, bem-vindo ao sistema de filas`,
  });
}
