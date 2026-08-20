using System;
using System.Collections.Generic;
using ChamaJussaDB.Models;
using Microsoft.EntityFrameworkCore;

namespace ChamaJussaDB.BdContext;

public partial class ChamaJussaContext : DbContext
{
    public ChamaJussaContext()
    {
    }

    public ChamaJussaContext(DbContextOptions<ChamaJussaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Notificacao> Notificacaos { get; set; }

    public virtual DbSet<OrdemServico> OrdemServicos { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=ChamaJussa;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Notificacao>(entity =>
        {
            entity.HasKey(e => e.IdNotificacao).HasName("PK__Notifica__046D38727928A2B0");

            entity.Property(e => e.IdNotificacao).HasDefaultValueSql("(newid())");

            entity.HasOne(d => d.IdOrdemServicoNavigation).WithMany(p => p.Notificacaos).HasConstraintName("FK__Notificac__IdOrd__5441852A");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Notificacaos).HasConstraintName("FK__Notificac__IdUsu__534D60F1");
        });

        modelBuilder.Entity<OrdemServico>(entity =>
        {
            entity.HasKey(e => e.IdOrdemServico).HasName("PK__OrdemSer__4CDAFF0C2C28FEF1");

            entity.Property(e => e.IdOrdemServico).HasDefaultValueSql("(newid())");
            entity.Property(e => e.Status).HasDefaultValue("Aberta");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.OrdemServicos).HasConstraintName("FK__OrdemServ__IdUsu__4E88ABD4");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuario__5B65BF9749A2473B");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
