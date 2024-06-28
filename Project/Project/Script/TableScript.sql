USE [UserManagerment]
GO
/****** Object:  Table [dbo].[UserRegister]    Script Date: 6/28/2024 9:13:05 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[UserRegister]') AND type in (N'U'))
DROP TABLE [dbo].[UserRegister]
GO
/****** Object:  Table [dbo].[UserRegister]    Script Date: 6/28/2024 9:13:05 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRegister](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
	[EmailId] [varchar](100) NULL,
	[Gender] [int] NULL,
	[Password] [varchar](max) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[IsActive] [int] NULL,
 CONSTRAINT [PK__UserRegi__3214EC079E4BC774] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[UserRegister] ON 
GO
INSERT [dbo].[UserRegister] ([Id], [Name], [EmailId], [Gender], [Password], [CreatedOn], [ModifiedOn], [IsActive]) VALUES (1, N'Akshaya', N'akshaya@gmail.com', 2, N'Ak12345@', CAST(N'2024-06-28T08:23:27.757' AS DateTime), NULL, 1)
GO
INSERT [dbo].[UserRegister] ([Id], [Name], [EmailId], [Gender], [Password], [CreatedOn], [ModifiedOn], [IsActive]) VALUES (2, N'jessi', N'Jessi@gmail.com', 2, N'Je12345@', CAST(N'2024-06-28T08:25:55.803' AS DateTime), NULL, 1)
GO
INSERT [dbo].[UserRegister] ([Id], [Name], [EmailId], [Gender], [Password], [CreatedOn], [ModifiedOn], [IsActive]) VALUES (3, N'Karthika', N'karthikar053@gmail.com', 2, N'Siva@1123', CAST(N'2024-06-28T09:08:09.767' AS DateTime), NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[UserRegister] OFF
GO
