CREATE DATABASE ChamaJussa;
GO

USE OrdemServicoDB;
GO

CREATE TABLE Usuario
(
    IdUsuario VARCHAR(40) PRIMARY KEY NOT NULL,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(256) NOT NULL,
    Senha VARCHAR(60) NOT NULL
);
GO

CREATE TABLE OrdemServico
(
    IdOrdemServico UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    IdUsuario VARCHAR(40) NOT NULL,
    TituloProblema VARCHAR(150) NOT NULL,
    Equipamento VARCHAR(150),
    Local VARCHAR(150) NOT NULL,
    Descricao VARCHAR(500) NOT NULL,
    Imagem VARCHAR(255),
    Status VARCHAR(30) NOT NULL DEFAULT 'Aberta',

    FOREIGN KEY (IdUsuario)
    REFERENCES Usuario(IdUsuario)
);
GO

CREATE TABLE Notificacao
(
    IdNotificacao UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    IdUsuario VARCHAR(40) NOT NULL,
    IdOrdemServico UNIQUEIDENTIFIER NOT NULL,
    Mensagem VARCHAR(255) NOT NULL,
    Lida BIT NOT NULL DEFAULT 0,

    FOREIGN KEY (IdUsuario)
    REFERENCES Usuario(IdUsuario),

    FOREIGN KEY (IdOrdemServico)
    REFERENCES OrdemServico(IdOrdemServico)
);
GO