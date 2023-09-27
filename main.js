$(document).ready(function () {
    // Array para armazenar as tarefas
    var tarefas = [];

    // Seleciona o formulário
    var form = $("form");

    // Seleciona o campo de entrada
    var inputTarefa = $("#input-tarefa");

    // Seleciona a lista de tarefas
    var listaTarefas = $("#lista-tarefas");

    // Evento de envio do formulário
    form.on("submit", function (e) {
        e.preventDefault(); // Evita o comportamento padrão do formulário

        // Obtém o valor do campo de entrada
        var novaTarefa = inputTarefa.val();

        // Verifica se o campo não está vazio
        if (novaTarefa.trim() !== "") {
            // Adiciona a nova tarefa ao array
            tarefas.push(novaTarefa);

            // Limpa o campo de entrada
            inputTarefa.val("");

            // Atualiza a lista de tarefas
            atualizarListaTarefas();
        }
    });

    // Função para atualizar a lista de tarefas
    function atualizarListaTarefas() {
        // Limpa a lista de tarefas existente
        listaTarefas.empty();

     // Evento de clique em uma tarefa
    listaTarefas.on("click", "li", function () { 
        $(this).toggleClass("concluida");
    });

    // Função para atualizar a lista de tarefas
    function atualizarListaTarefas() { 

    }



    // Função para atualizar a lista de tarefas
    function atualizarListaTarefas() {
    }


        // Adiciona cada tarefa à lista
        for (var i = 0; i < tarefas.length; i++) {
            var tarefa = tarefas[i];
            var li = $("<li>").text(tarefa);
            listaTarefas.append(li);
        }
    }



});

